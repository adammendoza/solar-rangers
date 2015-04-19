/**
 * GET /
 * Invest page.
 */
exports.index = function(req, res) {
  res.render('develop', {
    title: 'Develop'
  });
};

exports.developMn = function(req, res) {
  res.render('develop-mn', {
    title: 'Develop MN'
  });
};