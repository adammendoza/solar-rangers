/**
 * GET /
 * Invest page.
 */
exports.index = function(req, res) {
  res.render('invest', {
    title: 'Invest'
  });
};