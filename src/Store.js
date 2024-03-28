import { createStore } from "redux";

const posts = {
  john: {
    f62yeuwz: {
      title: "Reflecting on a Productive Coding Session",
      content:
        "Just finished a great coding session! Learned some new techniques and made significant progress on my project. Feeling accomplished and ready to tackle more challenges.",
    },
    r2fz2nuf: {
      title: "Embarking on a Journey with a New Framework",
      content:
        "Excited to start learning a new framework today. It's always thrilling to explore new technologies and expand my skill set. Looking forward to diving deep and mastering this framework.",
    },
    pl8c7pkp: {
      title: "Motivation to Overcome Challenges",
      content:
        "Feeling motivated to tackle some bugs. Challenges are opportunities for growth, and I'm determined to find solutions and improve my code. Let's turn these bugs into features!",
    },
    imdnaua5: {
      title: "Fostering Collaboration with a Productive Team Meeting",
      content:
        "Had a productive meeting with the team. Discussed project updates, shared ideas, and resolved any blockers. Collaboration is key to success, and I'm grateful for such a supportive team.",
    },
    agxev2ws: {
      title: "Celebrating Progress and Small Victories",
      content:
        "Celebrating small victories today! It's important to recognize and appreciate the progress we make, no matter how small. Each step forward brings us closer to our goals. Keep pushing forward!",
    },
  },
  emma: {
    gjkbp7ml: {
      title: "Excitement for a New Project",
      content:
        "Started working on a new project. Excited to explore new challenges and contribute to something meaningful. Can't wait to see this project come to life!",
    },
    u7ze48ya: {
      title: "Drawing Inspiration from Design Trends",
      content:
        "Feeling inspired by the latest design trends. It's fascinating to see how design evolves and influences user experiences. Ready to incorporate some fresh ideas into my work.",
    },
    sppywngi: {
      title: "Navigating Through Challenges",
      content:
        "Struggling with a tricky bug. Any ideas? Challenges like these test our problem-solving skills and perseverance. Open to suggestions and brainstorming solutions with fellow developers.",
    },
    j93jfooy: {
      title: "Anticipation for a Learning Opportunity",
      content:
        "Excited to attend a coding workshop next week. Learning is a lifelong journey, and I'm eager to gain new insights and refine my skills. Looking forward to connecting with other developers and sharing knowledge.",
    },
    "6bdd1b18": {
      title: "Sharing Insights through Blogging",
      content:
        "Just published a new blog post! Sharing my thoughts and experiences with the community. Hoping to spark discussions and inspire others on their coding journey.",
    },
  },
  alex: {
    b8nvai4w: {
      title: "Embracing Continuous Learning",
      content:
        "Learning something new every day! The tech industry is constantly evolving, and there's always something exciting to explore. Keeping an open mind and embracing opportunities for growth.",
    },
    "6euqi90j": {
      title: "Appreciating the Power of Community",
      content:
        "Feeling grateful for the supportive community. It's incredible to be part of a network of passionate individuals who uplift and empower each other. Together, we can achieve great things.",
    },
    nk8i8ui1: {
      title: "Exploring Creative Possibilities with CSS Animations",
      content:
        "Trying out some cool CSS animations. CSS is not just for styling; it's a powerful tool for creating engaging and interactive web experiences. Excited to experiment and push the boundaries of design.",
    },
    d2kqd8pj: {
      title: "Spreading Positivity on a Friday",
      content:
        "Happy Friday, everyone! Wishing you all a fantastic day filled with productivity and positivity. Let's finish the week strong and look forward to a well-deserved weekend.",
    },
  },
  sophia: {
    lfgm5f6b: {
      title: "Optimizing Performance for Better User Experience",
      content:
        "Working on optimizing performance. Performance is crucial for delivering a seamless user experience. Fine-tuning code and identifying areas for improvement to ensure our applications run smoothly.",
    },
    ghsdz5jf: {
      title: "Overcoming Challenges and Achieving Success",
      content:
        "Feeling accomplished after fixing a major issue. Challenges push us out of our comfort zone and help us grow as developers. Proud of the team's efforts in overcoming obstacles and delivering results.",
    },
    j2j9p8ao: {
      title: "Fostering Creativity through Collaboration",
      content:
        "Brainstorming ideas for the next feature. Collaboration sparks creativity and leads to innovative solutions. Excited to work with teammates to bring new ideas to life and enhance our product.",
    },
    x1k006ek: {
      title: "Drawing Inspiration from Industry Insights",
      content:
        "Got inspired by a tech talk today. It's inspiring to hear from industry experts and learn about the latest trends and technologies. Ready to apply newfound knowledge to my projects.",
    },
    oscuffse: {
      title: "Embracing Challenges and Growth Opportunities",
      content:
        "Ready to take on new challenges! Challenges are opportunities for growth and learning. With the right mindset and determination, we can overcome any obstacle that comes our way.",
    },
  },
};

function generateRandomId() {
  return Math.random().toString(36).substr(2, 8);
}

const initialState = {
  posts: posts,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add": {
      const { content, title, userName } = action.payload;
      const newId = generateRandomId();

      return {
        ...state,
        posts: {
          ...state.posts,
          [userName]: { ...state.posts[userName], [newId]: { title, content } },
        },
      };
    }
    case "edit": {
      const { content, title, userName } = action.payload;
      const idToEdit = action.payload.userpostId;

      return {
        ...state,
        posts: {
          ...state.posts,
          [userName]: {
            ...state.posts[userName],
            [idToEdit]: { title, content },
          },
        },
      };
    }

    case "delete": {
      // Check if the user exists in the posts object
      const { userName, postId } = action.payload;
      const updatedPosts = { ...state.posts };
      if (updatedPosts[userName]) {
        // Create a new object without the post with the given ID
        updatedPosts[userName] = Object.fromEntries(
          Object.entries(updatedPosts[userName]).filter(
            ([id, content]) => id !== postId
          )
        );
      }

      return {
        ...state,
        posts: updatedPosts,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
