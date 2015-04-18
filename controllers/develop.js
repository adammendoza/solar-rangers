/**
 * GET /
 * Invest page.
 */
exports.index = function(req, res) {
  res.render('develop', {
    title: 'Develop'
  });
};