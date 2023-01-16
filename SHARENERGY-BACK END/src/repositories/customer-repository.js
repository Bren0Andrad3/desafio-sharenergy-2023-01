'use strict';
const md5 = require('md5');
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


exports.get = async () => {
    const res = await Customer.find({});
    return res;
}

exports.create = async (data) => {
    var customer = new Customer(data);
    await customer.save();
}

exports.authenticate = async (data) => {
    const res = await Customer.findOne({
        username: data.username,
        password: data.password
    });
    return res;
}

exports.getById = async (id) => {
    const res = await Customer.findById(id);
    return res;
}
exports.update = async (id, data) => {
    await Customer.findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                username: data.username,
                email: data.email,
                password: md5(data.password + global.SALT_KEY),
                telefone: data.telefone,
                endereco: data.endereco,
                cpf: data.cpf
            }
        });
}

exports.delete = async (id) => {
    await Customer
        .findOneAndRemove(id);
}

exports.getById = async(id) => {
    const res = await Customer
        .findById(id);
    return res;
}