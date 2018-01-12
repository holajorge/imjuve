<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Deduciones_model extends CI_Model {

	public function __construct(){	
      parent::__construct();
   	}
   	public function getAll(){
   	 	
   	 	$this->db->select('*');      
      $this->db->from('cat_deducciones');
       $this->db->where('status', 1);
      $query = $this->db->get();
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return false;
        }
   }
   public function insertDeducciones( $deduccion){
   	 	return $this->db->insert('cat_deducciones', $deduccion);
   }

   public function updateDeducciones($id, $percepcion){
       $this->db->where('id_deduccion', $id);
      return $this->db->update('cat_deducciones', $percepcion);
   }


}

/* End of file Deduciones_model.php */
/* Location: ./application/models/Deduciones_model.php */