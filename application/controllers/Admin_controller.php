<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_controller extends CI_Controller {

	public function index()
	{
		$this->load->view('global_view/header');
		$this->load->view('admin/index');
		$this->load->view('global_view/foother');
	}

	public function getSkinConfig(){
		$this->load->view('skin-config');
	}
}