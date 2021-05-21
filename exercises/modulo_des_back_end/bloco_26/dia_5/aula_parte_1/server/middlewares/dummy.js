module.exports = (req, res, next) => {
  const responseTime = Date.now() - req.startTime;
  // throw new Error("Erro de conexão com banco de dados"); forçando erro
  res.status(200).json({
    method: req.method,
    responseTime,
    user: req.user,
  });
}
