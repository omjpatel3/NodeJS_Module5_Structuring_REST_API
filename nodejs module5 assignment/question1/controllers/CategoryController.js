const { ObjectId } = require('mongodb');
const { db } = require('../models/CategoryModel');
const { render } = require('ejs');

const add = async (req, res) => {
    try {
        console.log(req.body);

        let name = req.body.name;
        let age = req.body.age;
        let id = req.body.id
        let rollno = req.body.rollno;
        console.log(`Name: ${name}, Age: ${age}`)

        let database = await db;
        let collection = database.collection('category');
        let result = ''

        if(id!=''){
            //update
            let objId = new ObjectId(id)
            result = await collection.updateOne({_id:objId},{
                $set:{
                     name: name, age: age 
                }
            })
        }
        else{
            result = await collection.insertOne({ name: name, age: age });
        }

        if (result.acknowledged) {
            res.redirect('/category')
        }
        else {
            res.status(500).send("Failed to insert")
        }
    }
    catch (error) {
        console.log("Error inserting document :", error);
        res.status(500).send("An error occurred")
    }
}

const display = async(req,res) => {
    let database = await db;
    let collection = database.collection('category');
    let result = await collection.find({}).toArray();
    res.render('category',{
        data:result,
        editData:''
    })

}

const deleteData = async(req,res) => {
    let database = await db;
    let collection = database.collection('category');
    let id = req.params.id;              //function to get the id 
    let objId = new ObjectId(id)         //to convert the id into string obj
    let result = await collection.deleteOne({_id:objId})
    console.log(result);

    if(result.deletedCount>0){
        res.redirect('/category')
    }
    
}

const editData = async (req,res)=>{
    let database = await db;
    let collection = database.collection('category');
    let id = req.params.id;              //function to get the id 
    let objId = new ObjectId(id)         //to convert the id into string obj
    let editdata = await collection.findOne({ _id: objId })
    //console.log(result);

    let result = await collection.find({}).toArray();
    res.render('category',{
        data:result,
        editData:editdata
    })
}
module.exports = { add, display, deleteData, editData }