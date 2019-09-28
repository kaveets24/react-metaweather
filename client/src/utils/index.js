let rootUrl;

if (process.env.NODE_ENV === "production") {
  rootUrl = "";
} else {
  rootUrl = "http://localhost:8000";
}

export { rootUrl };
