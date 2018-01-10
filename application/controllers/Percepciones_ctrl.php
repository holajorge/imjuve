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
		$data['percepciones'] = $this->Percepciones_model->getAll();
		$this->load->view('global_view/header');
		$this->load->view('admin/percepciones/lista_percepciones',$data);
		$this->load->view('global_view/foother');
	}

	public function create()
	{
		$this->load->view('global_view/header');
		$this->load->view('admin/percepciones/percepciones');
		$this->load->view('global_view/foother');
	}
	public function create_percepciones()
	{
		$percepcion = array(
			'indicador' => $this->input->post('indicador'),		 
		    'nombre' => $this->input->post('nombre'),	
		    'tipo' => $this->input->post('tipo'),
		    'opcion_default' => 1,	       
		    );
		$query = $this->Percepciones_model->insertPercepciones($percepcion);
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