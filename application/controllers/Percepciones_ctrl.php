<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Percepciones_ctrl extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
        // $this->load->library('bcrypt');
        $this->load->model('Percepciones_model');
    }

	public function index()
	{
		$dato['active'] = "percepcion";
        $dato['active1'] = "lista_percepciones";
		$data['percepciones'] = $this->Percepciones_model->getAll();
		$this->load->view('global_view/header', $dato);
		$this->load->view('admin/percepciones/lista_percepciones',$data);
		$this->load->view('global_view/foother');
	}

	public function create()
	{
		$dato['active'] = "percepcion";
        $dato['active1'] = "percepciones";
		$this->load->view('global_view/header', $dato);
		$this->load->view('admin/percepciones/percepciones');
		$this->load->view('global_view/foother');
	}

	public function searchIndicador(){
		$indicador= $this->input->post('indicador');
	    $query = $this->Percepciones_model->existIndicador($indicador);
	    if ($query == 1) {
            $result['resultado'] = true;
        } else {
            $result['resultado'] = false;
        }
        echo json_encode($result);	
	}

	public function create_percepciones()
	{
		$percepcion = array(
			'indicador' => $this->input->post('indicador'),		 
		    'nombre' => $this->input->post('nombre'),	
		    'tipo' => $this->input->post('tipo'),
		    'opcion_default' => 1,
		    'status' => 1,	       
		    );
		$query = $this->Percepciones_model->insertPercepciones($percepcion);
		if ($query == 1) {
            $result['resultado'] = true;
        } else {
            $result['resultado'] = false;
        }
        echo json_encode($result);	
	}
	public function delete_Percepcion()
	{
		 $id = $this->input->post('id');
		 $this->Percepciones_model->eliminarPercepcion($id);
		
		return true;
	}
	public function edit_perception(){

		$id = $this->input->post('id');
		$percepcion = array(
			'indicador' => $this->input->post('indicador'),		 
		    'nombre' => $this->input->post('nombre'),	
		    'tipo' => $this->input->post('tipo'),
		    'opcion_default' => 1,	       
		    'status' => 1,
		    );
		$query = $this->Percepciones_model->updatePercepciones($id,$percepcion);
		if ($query == 1) {
            $result['resultado'] = true;
        } else {
            $result['resultado'] = false;
        }
        echo json_encode($result);	

	}

}

/* End of file Percepciones_ctrl.php */
/* Location: ./application/controllers/Percepciones_ctrl.php */