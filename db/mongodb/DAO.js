const User = require('./mongoose_models/User')
const mongoose = require('mongoose');


class dao{

    async create(model, data){
        const ModelClass = require(`./mongoose_models/${model}`);
        return ModelClass.create(data);
    }

    async findOneById(model,id){
        const ModelClass = require(`./mongoose_models/${model}`);
        return ModelClass.findById(id);
    }

    async findOne(model,query){
        const ModelClass = require(`./mongoose_models/${model}`);
        return ModelClass.findOne(query);
    }

    async queryOne(model, query){
        const ModelClass = require(`./mongoose_models/${model}`);
        return ModelClass.findOne(query);
    }

    async updateOne(model, id, update){
        const ModelClass = require(`./mongoose_models/${model}`);
        return ModelClass.findByIdAndUpdate(id, update);
    }

    async updateQuery(model, id, query){
        const ModelClass = require(`./mongoose_models/${model}`);
        return ModelClass.updateMany({_id:id},{$set:query},{multi:true,new:true});
    }

    async queryMore(model, query){
        const ModelClass = require(`./mongoose_models/${model}`);
        return ModelClass.find(query);
    }

    async deleteOne(model, query){
        const ModelClass = require(`./mongoose_models/${model}`);
        return ModelClass.remove(query);
    }

    async deleteById(model, id){
        const ModelClass = require(`./mongoose_models/${model}`);
        return ModelClass.remove({_id:id});
    }

    async countQuery(model, query){
        const ModelClass = require(`./mongoose_models/${model}`);
        return ModelClass.countDocuments(query);
    }
}

module.exports = new dao();

