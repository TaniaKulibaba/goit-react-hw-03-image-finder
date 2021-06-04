import axios from 'axios';

const fetchImg = ({ searchQuery = '', currentPage = 1, page = 12 }) => {
    return axios
        .get(`https://pixabay.com/api/?key=20845173-2ff0065230e334edab9236e38&q=${searchQuery}&image_type=photo&per_page=${page}&page=${currentPage}`,
)
        .then(response => response.data.hits)
};

export default { fetchImg };