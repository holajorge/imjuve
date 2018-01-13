<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Puesto_model extends CI_Model {

	public function __construct() {
      parent::__construct();
   	}

    public function getAll(){
   	 	$this->db->select('*');
        $this->db->from('cat_puestos');
         $this->db->where('status', 1);
        $query = $this->db->get();

        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return false;
        }
    }    

    public function insertPuesto($puesto){
   	 	return $this->db->insert('cat_puestos', $puesto);
    }

    public function uptadePuesto($id, $depto){
       $this->db->where('id_puesto', $id);
      return $this->db->update('cat_puestos', $depto);
    }



}

/* End of file Puesto_model.php */
/* Location: ./application/models/Puesto_model.php */