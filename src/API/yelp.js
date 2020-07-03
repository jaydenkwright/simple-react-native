import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zKxcPm4-B-y9TTyQ0_t6RKj2F1lSGjip2PucEzHeSgutPb9OPpmBFsGugcDiwJQclfIHDoXB4wOONAb8Vi4uVXlGzox_M8zWliKog_Qe09Z-BwLvgj8CwaVLZLL_XnYx'
    }
})

// Client ID
// dkRSoQdN-XJClu0XdmK84Q

// API Key
// zKxcPm4-B-y9TTyQ0_t6RKj2F1lSGjip2PucEzHeSgutPb9OPpmBFsGugcDiwJQclfIHDoXB4wOONAb8Vi4uVXlGzox_M8zWliKog_Qe09Z-BwLvgj8CwaVLZLL_XnYx