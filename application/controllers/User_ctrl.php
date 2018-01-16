<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_ctrl extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
        $this->load->model('User_model');
    }
	public function index()
	{
		
	}
	public function list()
	{
		if($this->session->userdata('tipo_usuario')=="admin"){
	      	$dato['active'] = "usuarios";
	        $dato['active1'] = "lista_usuarios";
			$data['users'] = $this->User_model->getAll();			
			$this->load->view('global_view/header', $dato);
			$this->load->view('admin/usuario/lista_users',$data);
			$this->load->view('global_view/foother');	
	      }else{
	      redirect('login_ctrl');
	    }
	}

}

/* End of file User_ctrl.php */
/* Location: ./application/controllers/User_ctrl.php */