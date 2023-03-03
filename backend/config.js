var config = {}

config.listablanca = [
    'http://127.0.0.1:5000',
    'http://127.0.0.1:4200',
    'http://localhost:5000',
    'http://localhost:4200',
    'undefined',

]
config.puerto = 3000
config.db = "topspinstore"
config.Clave = 'TopSpinStore'
config.tiemposession=(60000 * 30)
config.claveoculta='TopSpinStore'
config.cookiename='finalcookie'

module.exports.config = config