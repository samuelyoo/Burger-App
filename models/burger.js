const orm = require( '../config/orm' )

// let burgers = [
//     { id: 0, name: "Cheese Burger", devoured: false },
//     { id: 1, name: "McBurger", devoured: true },
// ]

async function getAvailable(){
    const burgerList = await orm.selectAll()
    return burgerList.filter( burger=>burger.devoured == false )
    // return burgers.filter( burger=>burger.devoured == false )
}

async function getDevoured(){
    const burgerList = await orm.selectAll()
    return burgerList.filter( burger=>burger.devoured == true )
    // return burgers.filter( burger=>burger.devoured == true )
}

function add( name ){
    return orm.insertOne( name )
    // burgers.push( { id: Date.now(), name, devoured: false } )
}

function devour( id ){
    return orm.updateOne( id,"devoured",true )
    // const idx = burgers.findIndex( burger=>burger.id == id )
    // // mark the burger as devoiured
    // burgers[idx].devoured = true
}

module.exports = {
    getAvailable, getDevoured, add, devour
}