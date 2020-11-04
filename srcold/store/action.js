import axios from 'axios';

export const selectCountry = (data) => ({
    type: 'selecedtCountry',
    payload: data
})

export const search_res = (data) => ({
    type: 'search_res',
    payload: data
})

export const upload_img = (data) => ({
    type: 'upload_img',
    payload: data
})

export const val = (data) => ({
    type: 'val',
    payload: data
})

export const ope_hrs = (data) => ({
    type: 'ope_hrs',
    payload: data
})

export const get_amenities = (data) => ({
    type: 'get_amenities',
    payload: data
})

export const listing_details = (data) => ({
    type: 'listing_details',
    payload: data
})

export const loading_control = (data) => ({
   type: 'loading_control', 
   payload: data
})

// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>



export function user_signup(body) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            axios.post('https://dirto.herokuapp.com/app/auth/signup', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

export function user_signin(body) {
    console.log(body);
    return dispatch => {
        return new Promise(function (resolve, reject) {
            axios.post('https://dirto.herokuapp.com/app/auth/signin', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

// <<<<<<<<<<<<< Searching >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Searching >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Searching >>>>>>>>>>>>>>>>>>

export function search(body) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            axios.post('https://dirto.herokuapp.com/app/search', body)
                .then((response) => {
                    resolve(response.data)
                    console.log(response.data);
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

export function searchByCountry(body) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            axios.post('https://dirto.herokuapp.com/app/searchbycountry', body)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

export function searchByCity(body) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            axios.post('https://dirto.herokuapp.com/app/searchbycity', body)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

export function searchByLocation(body) {
    console.log(body);
    return dispatch => {
        return new Promise(function (resolve, reject) {
            axios.post('https://dirto.herokuapp.com/app/searchbylocation', body)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

export function searchByCategory(body) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            axios.post('https://dirto.herokuapp.com/app/searchbycategory', body)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}
// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// https://dirto.herokuapp.com/
// https://dirto.herokuapp.com

export function add_listing(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/listing/add_listing', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}
// https://dirto.herokuapp.com

export function get_listing(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.get('https://dirto.herokuapp.com/app/listing/get_listing', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function get_listing_usr(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/listing/get_listing/usr', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function del_listing(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/listing/del_listing', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< listing >>>>>>>>>>>>>>>>>>
// https://dirto.herokuapp.com/
// https://dirto.herokuapp.com

// get_unapproved_listing

export function get_unapproved_listing(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/get_unapproved_listing', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}
// https://dirto.herokuapp.com

export function get_approved_listing(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/get_unapproved_listing', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function approved_listing(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/apr_listing', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function unapproved_listing(body) {
    console.log(body);
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/unapr_listing', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function admin_delete_listing(body) {
    console.log(body);
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/admin_delete_listing', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}




export function add_cat(body) {
    console.log(body);
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/add_cat', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function get_cat() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.get('https://dirto.herokuapp.com/app/admin/get_cat')
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function del_cat(body) {
    console.log(body);
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/del_cat', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function edt_cat(body) {
    console.log(body);

    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/edt_cat', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}




export function add_cit(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/add_loc', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function get_cit() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.get('https://dirto.herokuapp.com/app/admin/get_cit')
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function del_cit(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/del_cit', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function edt_cit(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/edt_cit', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}




export function add_loc(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/add_loc', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function get_loc() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.get('https://dirto.herokuapp.com/app/admin/get_loc')
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function del_loc(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/del_loc', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

export function edt_loc(body) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('https://dirto.herokuapp.com/app/admin/edt_loc', body)
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject((err))
                })
        })
    }
}

