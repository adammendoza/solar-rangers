/**
 * GET /
 * Invest page.
 */
exports.index = function(req, res) {
  res.render('invest', {
    title: 'Invest'
  });
};

exports.investMn = function(req, res) {
  res.render('invest-mn', {
    title: 'Invest MN'
  });
};

exports.investCa = function(req, res) {
  res.render('invest-ca', {
    title: 'Invest CA'
  });
};
