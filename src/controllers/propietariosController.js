const { name } = require("ejs");

const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM propietarios',(error, propietarios) => {
            if (error) {
                res.json(error);
            }
            res.render('propietarios', {
                data: propietarios
            })
        });
    });
};

controller.guardar = (req, res) => {
    const data = req.body;
    

    // ('"+nombre+"', '"+apellido+"', '"+telefono+"', '"+direccion+"', '"+localidad+"', '"+mail+"');"
    const sql = "INSERT INTO propietarios (nombre, apellido, telefono, localidad, mail) VALUES ('"+data.name+"', '"+data.apellido+"', '"+data.telefono+"', '"+data.localidad+"', '"+data.mail+"');"
    

    req.getConnection((error, conn) => {
        console.log(sql);
        if (error) {
            console.log("Hubo un error en la insercion", error.message);
            return res.status(500).JSON(error);
        }        
        conn.query(sql, (error, propietario) => {
            if (error) {
                console.log("Hubo un error en la insercion", error.message);
                return res.status(500).JSON(error);
            }
            res.redirect("/");
        });
    });
}

controller.editar = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM propietarios WHERE id = "+id+";"
    req.getConnection((error, conn) => {
        if(error) {
            console.log("hubo un error en la insercion", error.message);
            return res.status(500).JSON(error);
        }
        conn.query(sql, (error, propietario) => {
            if(error) {
                console.log("hubo un error en la insercion", error.message);
                return res.status(500).JSON(error);
            }
            res.render("propietarios_editar", {
                data: propietario[0]
            })
        })
    })
}

controller.actualizar = (req, res) => {
    const id = req.params.id;
    const nuevoProp = req.body;

    const sql = "UPDATE propietarios set ? WHERE id =?";

    req.getConnection ((error, conn) => {
        if(error) {
            console.log("hubo un error en la insercion", error.message);
            return res.status(500).JSON(error);
        }
        conn.query(sql, [nuevoProp, id], (error, propietarios) => {
            console.log(id);
        console.log(nuevoProp);
            if(error) {
                console.log("hubo un error en la insercion", error.message);
                return res.status(500).JSON(error);
            }
            res.redirect("/");
        })
    })
}

controller.eliminar = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM propietarios where id = ?;" //+id+";"
    req.getConnection((error, conn) => {
        if (error) {
            console.log("hubo un error en la insercion", error.message);
            return res.status(500).JSON(error);
        }
        conn.query(sql, [id], (error, resultado) => {
            console.log(sql);
            console.log([id]);
            if (error){
                console.log("hubo un error en la insercion", error.message);
                return res.status(500).JSON(error);
            }
            res.redirect("/");
        })
    })
}


module.exports = controller;