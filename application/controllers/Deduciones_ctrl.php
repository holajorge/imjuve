<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Deduciones_ctrl extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
        $this->load->model('Deduciones_model');
    }
	public function index()
	{		
        $dato['active'] = "deduccion";
        $dato['active1'] = "lista_deducciones";
		$data['deducciones'] = $this->Deduciones_model->getAll();
		$this->load->view('global_view/header', $dato);
		$this->load->view('admin/deducciones/lista_deducciones',$data);
		$this->load->view('global_view/foother');
	}
	public function create()
	{
		$dato['active'] = "deduccion";
		$dato['active1'] = "registro";        
		$this->load->view('global_view/header', $dato);
		$this->load->view('admin/deducciones/registro');
		$this->load->view('global_view/foother');
	}
	public function create_deducciones()
	{
		$deduccion = array(
			'indicador' => $this->input->post('indicador'),		 
		    'nombre' => $this->input->post('nombre'),	
		    'tipo' => $this->input->post('tipo'),
		    'opcion_default' => 1,	       
		    );
		$query = $this->Deduciones_model->insertDeducciones($deduccion);
		if ($query == 1) {
            $result['resultado'] = true;
        } else {
            $result['resultado'] = false;
        }
        echo json_encode($result);	
	}

}

/* End of file Deduciones_ctrl.php */
/* Location: ./application/controllers/Deduciones_ctrl.php */