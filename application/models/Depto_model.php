<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Depto_model extends CI_Model {

	public function __construct(){	
      parent::__construct();
   	}
   	public function getAll(){
   	 	
   	 	$this->db->select('*');      
      	$this->db->from('cat_depto');
        $this->db->where('status', 1);
	    $query = $this->db->get();
	      if ($query->num_rows() > 0) {
	        return $query->result();
	      } else {
	        return false;
	      }
   }
   public function insertDepto( $deduccion){
   	 	return $this->db->insert('cat_depto', $deduccion);
   }

}

/* End of file Depto_model.php */
/* Location: ./application/models/Depto_model.php */