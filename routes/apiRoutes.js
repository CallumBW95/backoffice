module.exports = app => {
	require("./api/pageRoutes")(app);

	app.get("/api/*", (req, res) => {
		if (req.isAuthenticated()) {
			res.send({ test: "test" });
		} else {
			res.send(401);
		}
	});
};
