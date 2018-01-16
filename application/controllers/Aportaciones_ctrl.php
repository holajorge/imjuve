<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Aportaciones_ctrl extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
        // $this->load->library('bcrypt');
        $this->load->model('Aportaciones_model');
    }


	public function lista_aportaciones(){
		$query = $this->Aportaciones_model->getAll();
		if ($query != false) {
            $result['resultado'] = true;
            $result['aportaciones'] = $query;
        } else {
            $result['resultado'] = false;
        }
        echo json_encode($result);
	}

}