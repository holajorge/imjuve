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

	public function lista_empleado(){
		$this->load->view('global_view/header');
		$this->load->view('admin/empleados/lista_empleados');
		$this->load->view('global_view/foother');
	}

	public function get_lista_empleados(){
		
	}

	public function guardar_empleado(){
		$no_plaza = $this->input->post("no_plaza");
        $nombre = $this->input->post("nombre");
        $ap_paterno = $this->input->post("ap_paterno");
        $ap_materno = $this->input->post("ap_materno");
        $fecha_nacimiento = $this->input->post("fecha_nacimiento");
        $curp = $this->input->post("curp");
        $id_depto = $this->input->post("id_depto");
        $id_puesto = $this->input->post("id_puesto");
        $no_empleado = $this->input->post("no_empleado");
        $rfc = $this->input->post("rfc");

        $emplado = array(
        			'no_plaza' => $no_plaza, 
        			'nombre' => $nombre,
        			'ap_paterno' => $ap_paterno,
        			'ap_materno' => $ap_materno,
        			'fecha_nacimiento' => $fecha_nacimiento,
        			'curp' => $curp,
        			'id_depto' => $id_depto,
        			'id_puesto' => $id_puesto,
        			'no_empleado' => $no_empleado,
        			'rfc' => $rfc
        			);
		$query = $this->Empleado_model->guardar_empleado($emplado);
        if ($query == 1) {
            $result['resultado'] = true;
        } else {
            $result['resultado'] = false;
        }

        echo json_encode($result);
	}

}