module.exports.getData = (req, res) => {
    res.json({
        posts: [{ title: "jsc candidate" }, { description: "Welcome in candidate module" }]
    });
}