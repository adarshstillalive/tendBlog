import express from 'express';
import commonController from '../controller/commonController';

const route = express.Router();

route.get('/',commonController.getHome);
route.get('/editContent/:id',commonController.getEditContent);
route.post('/editContent/:id',commonController.postEditContent);
route.get('/addBlog',commonController.getAddBlog);
route.post('/addBlog',commonController.postAddBlog);
route.get('/viewBlog/:id',commonController.getViewBlog);
route.get('/deleteBlog/:id',commonController.getDeleteBlog)

export default route;