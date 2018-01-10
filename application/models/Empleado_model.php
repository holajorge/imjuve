<?php 
defined('BASEPATH') or exit('No direct script access allowed');
class Empleado_model extends CI_Model { 
   public function __construct() {
      parent::__construct();
   }
   
   public function get_departamentos(){
   	 	$this->db->select('*');
        $this->db->from('cat_depto');
        $query = $this->db->get();

        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return false;
        }
   }

   public function get_puestos(){
   	 	$this->db->select('*');
        $this->db->from('cat_puestos');
        $query = $this->db->get();

        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return false;
        }
   }

   public function guardar_empleado($empleado){
      return $this->db->insert('cat_empleados', $empleado);
   }
}