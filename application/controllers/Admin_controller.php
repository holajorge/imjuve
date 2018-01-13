<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_controller extends CI_Controller {

	public function index()
	{
		if($this->session->userdata('tipo_usuario')=="admin"){

			$this->load->view('global_view/header');
			$this->load->view('admin/index');
			$this->load->view('global_view/foother');
      
        }else{
        redirect('login_ctrl');
    }
		
	}

	public function getSkinConfig(){
		$this->load->view('skin-config');
	}

	public function detalle_nomina(){
		$dato['active'] = "nomina";
		$dato['active1'] = "alta_nomina";
        $this->load->view('global_view/header',$dato);
		$this->load->view('admin/nomina/detalle_nomina');
		$this->load->view('global_view/foother');
	}
}