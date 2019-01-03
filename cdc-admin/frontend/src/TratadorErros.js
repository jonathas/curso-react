import PubSub from 'pubsub-js';

export default class TratadorErros {
    publicaErros(erros) {
        for (let error of erros.errors) {
            PubSub.publish("erro-validacao", error);
        }
    }
}