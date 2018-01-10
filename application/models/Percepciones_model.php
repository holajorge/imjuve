<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Percepciones_model extends CI_Model {

	public function __construct() {
      parent::__construct();
   }
   
   public function getAll(){
   	 	$this->db->select('*');
        $this->db->from('cat_percepciones');
        $query = $this->db->get();

        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return false;
        }
   }

   public function insertPercepciones( $percepcion){
   	 	return $this->db->insert('cat_percepciones', $percepcion);
   }

}

/* End of file Percepciones_model.php */
/* Location: ./application/models/Percepciones_model.php */