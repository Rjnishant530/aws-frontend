
class CustomerService {

    customerService = 'http://54.152.173.221:8001/api/customers'
    // customerService = 'http://localhost:8001/api/customers'


    getAllCustomers = async () => {
        var reponse = await fetch(this.customerService);
        var result = await reponse.json();
        return result.customerList;

    }

    getById = async (id) => {
        var reponse = await fetch(`${this.customerService}/${id}`);
        var result = await reponse.json();
        return result;

    }
}
export default CustomerService;