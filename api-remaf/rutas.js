const router = require('express').Router()
const conexion = require('./config/conexion')

const cors = require('cors')
// asignamos las rutas


// get estaciones 

router.get('/',(req,res)=>{
    let sql = 'select * from estaciones'
    conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

// get ultima medicion de la estacion

router.get('/:id',(req,res)=>{
    const{id} = req.params
    let sql = `SELECT * FROM sensores,estaciones WHERE rela_estaciones=id_estaciones and id_estaciones='${id}' ORDER by id_sensores DESC LIMIT 1 `
    conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

// get todas las mediciones de un estacion en una fecha

router.get('/:id/:date',(req,res)=>{
    const{id , date} = req.params
    let sql = `SELECT * FROM sensores,estaciones WHERE rela_estaciones=id_estaciones and id_estaciones='${id}'  and   date_estaciones like '%${date}%' ORDER by id_sensores DESC`
    conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//agregar medicion de sensores

router.get('/:temp/:hume/:prec/:dir/:vel/:estacion' , cors() ,async function (req, res) {
    const  { temp, hume, prec, dir, vel, estacion } = await req.params
    if (temp == '' || !temp ) {
        res.json({ status: 'datos incompletos' })
    } else {
        let sql = `insert into sensores(temperatura_sensores,
	humedad_sensores,
	precipitacion_sensores,
	direcc_viento_sensores,
	veloc_viento_sensores,
	rela_estaciones) 
    values('${temp}'
    ,'${hume}'
    ,'${prec}'
    ,'${dir}'
    ,'${vel}'
    ,'${estacion}')`
      conexion.query(sql, (err, rows, fields) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json({ status: 'Lectura de sensor agregado' })
        }
    })
        }
    })

// -------------------
router.post('/' , cors() ,async function (req, res) {
    const  { temp, hume, prec, dir, vel, estacion } = await req.body
    if (temp == '' || !temp ) {
        res.json({ status: 'datos incompletos' })
    } else {
        let sql = `insert into sensores(temperatura_sensores,
	humedad_sensores,
	precipitacion_sensores,
	direcc_viento_sensores,
	veloc_viento_sensores,
	rela_estaciones) 
    values('${temp}'
    ,'${hume}'
    ,'${prec}'
    ,'${dir}'
    ,'${vel}'
    ,'${estacion}')`
      conexion.query(sql, (err, rows, fields) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json({ status: 'Lectura de sensor agregado' })
        }
    })
        }
    })


module.exports = router;