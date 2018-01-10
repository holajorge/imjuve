<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Empleado_controller extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
        // $this->load->library('bcrypt');
        $this->load->model('Empleado_model');
    }
	public function index()
	{
		
	}

	public function create(){
		$data['deptos'] = $this->Empleado_model->get_departamentos();
		$data['puestos'] = $this->Empleado_model->get_puestos();
		$this->load->view('global_view/header');
		$this->load->view('admin/registro',$data);
		$this->load->view('global_view/foother');
	}

	public function guardar_empleado(){
		
	}
}