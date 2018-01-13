<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Nomina_controller extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
        // $this->load->library('bcrypt');
        $this->load->model('Nomina_model');
    }

	public function detalle_nomina(){
		$dato['active'] = "nomina";
		$dato['active1'] = "alta_nomina";
        $this->load->view('global_view/header',$dato);
		$this->load->view('admin/nomina/detalle_nomina');
		$this->load->view('global_view/foother');
	}

	public function buscar_empleado_nomina(){
		
		$rfc = $this->input->post("rfc");
		$query = $this->Nomina_model->buscar_empleado_nomina($rfc);

		if ($query != false) {
            $result['resultado'] = true;
            $result['empleado'] = $query;
        } else {
            $result['resultado'] = false;
        }

        echo json_encode($result);
	}
}