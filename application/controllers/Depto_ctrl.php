<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Depto_ctrl extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
        $this->load->model('Depto_model');
    }
	public function index()
	{
		$dato['active'] = "depto";
        $dato['active1'] = "lista_departamentos";
		$data['deptos'] = $this->Depto_model->getAll();
		$this->load->view('global_view/header', $dato);
		$this->load->view('admin/depto/lista_depto',$data);
		$this->load->view('global_view/foother');	
	}
	public function create()
	{
		$dato['active'] = "depto";
		$dato['active1'] = "registro";        
		$this->load->view('global_view/header', $dato);
		$this->load->view('admin/depto/registro');
		$this->load->view('global_view/foother');
	}
	public function create_depto()
	{
		$depto = array(
		    'nombre' => $this->input->post('nombre'),	
		    'status' => 1,     
		    );
		$query = $this->Depto_model->insertDepto($depto);
		if ($query == 1) {
            $result['resultado'] = true;
        } else {
            $result['resultado'] = false;
        }
        echo json_encode($result);	
	}
}

/* End of file Depto_ctrl.php */
/* Location: ./application/controllers/Depto_ctrl.php */