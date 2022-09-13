export async function getGroup(currentGroup) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/groups/${currentGroup}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRoutesForSlider() {
  try {
    const res = await fetch(
      "https://localhost:3333/api/routes?page=1&itemsperpage=5&orderByRating=true"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getGroups(currentPage, itemsPerPage) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/groups?page=${currentPage}&itemsperpage=${itemsPerPage}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewRoute(newRoute) {
  try {
    const res = await fetch("https://localhost:3333/api/routes/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newRoute),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getComments(postId) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/post/${postId}/comment`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewComment(postId, comment) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/post/${postId}/comment`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getPosts(route, id) {
  try {
    const res = await fetch(`https://localhost:3333/api/${route}/${id}/post`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewPost(route, id, post) {
  try {
    const res = await fetch(`https://localhost:3333/api/${route}/${id}/post`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRides(currentPage, itemsPerPage) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/rides?page=${currentPage}&itemsperpage=${itemsPerPage}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getRoutes(currentPage, itemsPerPage) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/routes?page=${currentPage}&itemsperpage=${itemsPerPage}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getRide(id) {
  try {
    const res = await fetch(`https://localhost:3333/api/rides/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRoute(id) {
  try {
    const res = await fetch(`https://localhost:3333/api/routes/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsForFeed() {
  try {
    const res = await fetch(
      "https://localhost:3333/api/feed/1/post?orderByDate=true"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewPostsForFeed(post) {
  try {
    const res = await fetch("https://localhost:3333/api/feed/1/post", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(user) {
  try {
    const res = await fetch(`https://localhost:3333/api/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(user) {
  try {
    const res = await fetch(`https://localhost:3333/api/users/login`, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(user),
    });
    const headers = res.headers;
    console.log(document.cookie);
    const data = await res.text();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getToken() {
  try {
    const res = await fetch("https://localhost:3333/api/users/refresh-token", {
      method: "POST",
    });
    console.log(res);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function testLogin(token) {
  try {
    const res = await fetch("https://localhost:3333/api/users/logged", {
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
