<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class login_ctrl extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
        $this->load->model('Login_model');
    }

	public function index()
	{
		$data['error'] = $this->session->flashdata('error');
		$this->load->view('login', $data);		
	}

	public function autentificarUser(){

		if ($this->input->post())  {

	      $rfc = $this->input->post('rfc');
	      $password = $this->input->post('password');
	      
	      $fila =  $this->Login_model->authUserRoot($rfc, $password);

	      // var_dump($fila); die();

	      if($fila){  	    
	        $tipo = $fila->tipo_usuario;
		        if($tipo == "admin"){
			          $data = array(
			            'id_usuario'   =>  $fila->id_usuario,
			            'nombre'   =>  $fila->nombre,
			            'apellido'   =>  $fila->ap_paterno,
			            'logueado' =>TRUE,
			            'tipo_usuario'=> $fila->tipo_usuario
			            );
			          $this->session->set_userdata($data);
			          $this->logueadoRoot();	      
			     } 
	   	  }else{	
	   	  	 $this->session->set_flashdata('error', '<strong>Usuario o Contraseña</strong> Incorrecto*');   
	     	redirect('login_ctrl');              
	      } 
	  }
	}
	public function logueadoRoot()
	{
	    if($this->session->userdata('logueado'))
	    {	     
		     $data['nombre'] = $this->session->userdata('nombre');
		     $data['apellido'] = $this->session->userdata('apellido'); 
		     redirect('Admin_controller', $data);	     
	    }else{
	         redirect('login_ctrl');
	    }
    }
    
    public function cerrar_sesion() 
	{
	   $this->session->sess_destroy();
	   redirect('login_ctrl');
	}

}

/* End of file Login_crtl.php */
/* Location: ./application/controllers/Login_crtl.php */