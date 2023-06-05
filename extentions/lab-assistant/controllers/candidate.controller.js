module.exports.getData = (req, res) => {
    res.json({
        posts: [{ title: "lab assistant candidate" }, { description: "Welcome in candidate module" }]
    });
}