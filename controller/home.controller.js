export const homeController = (req, res, next) =>
  res.render("home", { metatitle: "home" });
export const aboutController = (req, res, next) =>
  res.render("about", { metatitle: "about" });

export const variablesController = (req, res, next) =>
  res.render("variables", {
    metatitle: "home",
    title: "Hello, World. I am a variable, dynamically injected",
    user: {
      name: "Abhilash",
      age: 27,
      email: "abhilashsk1998@gmail.com",
      isActive: true,
    },
  });

export const conditionalsController = (req, res, next) => {
  res.render("conditionals", {
    metatitle: "Conditionals",
    user: {
      isLoggedIn: true,
      isAdmin: false,
      hasItems: true,
    },
  });
};

export const loopController = (req, res, next) => {
  res.render("loop", {
    metatitle: "Loop",
    fruits: ["Apple", "Mango", "Grapes", "Chikku"],
  });
};

export const contactController = (req, res, next) => {
  res.render("contact", {
    metatitle: "Contact",
  });
};

export const saveContactController = async (req, res, next) => {
  console.log("Form Submitted");
  const body = await req.body;
  console.log(body, "BODY");
  console.log(
    `Name: ${body.name}, Email: ${body.email}, Message: ${body.message}`
  );

  res.json({ name: body.name, email: body.email });
};
