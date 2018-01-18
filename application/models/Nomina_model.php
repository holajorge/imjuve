<?php 
defined('BASEPATH') or exit('No direct script access allowed');
class Nomina_model extends CI_Model { 
   public function __construct() {
      parent::__construct();
   }
   
   	public function getAll(){
   		$this->db->select('*');      
      	$this->db->from('tab_nomina');
      	$query = $this->db->get();
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return false;
        }
   	}
 //   public function buscar_empleado_nomina($rfc){
	// 	$this->db->select("cat_empleados.id_empleado, cat_empleados.no_plaza, cat_empleados.nombre AS nombre_emp, cat_empleados.ap_paterno, cat_empleados.ap_materno, cat_empleados.fecha_nacimiento,       cat_empleados.fecha_ingreso, cat_empleados.curp,  cat_empleados.no_empleado, cat_empleados.rfc, cat_depto.id_depto, cat_depto.nombre AS nombre_depto, cat_puestos.id_puesto, cat_puestos.nivel, cat_puestos.nombre AS nombre_puesto");
	//     $this->db->from("cat_depto");
	//     $this->db->join("cat_empleados","cat_depto.id_depto = cat_empleados.id_depto");
	//     $this->db->join("cat_puestos","cat_empleados.id_puesto = cat_puestos.id_puesto");
	//     $this->db->where("cat_empleados.rfc = '".$rfc."'");
	//     $query = $this->db->get();
	    
	//     if ($query->num_rows() > 0) {
	//         return $query->result();
	//     }else{
	//         return false;
	//     }
	// }
  public function getAllPeriodos(){

    $query = $this->db->query("SELECT * FROM tab_nomina");    
      if ($query->num_rows() > 0) {
          return $query->result();
      }else{
          return false;
      }

  }
  public function buscar_periodo($id_nomina){

      $query = $this->db->query("SELECT ce.id_empleado, tn.id_nomina , ce.no_plaza, ce.rfc, ce.nombre  AS nombre_emp, ce.ap_paterno,  ce.ap_materno, ce.fecha_ingreso, cd.nombre as 'depto', cp.nombre as 'puesto',  ce.curp 
                    FROM empleadosxpercepciones  exp, cat_empleados ce, tab_nomina tn,  cat_depto cd, cat_puestos cp
                    WHERE cp.id_puesto=ce.id_puesto 
                        AND cd.id_depto=ce.id_depto 
                        AND ce.id_empleado=exp.id_empleado 
                        AND exp.id_nomina=tn.id_nomina 
                        AND tn.id_nomina='".$id_nomina."' 
                        GROUP BY exp.id_empleado");

      if ($query->num_rows() > 0) {
          return $query->result();
            
      }else{
          return false;
      }
  }
  public function guardar_percepciones_nomina($id_nomina,$id_empleado,$data_percepciones){
    for ($i=0; $i < (count($data_percepciones)- 1); $i++) { 
      $percepciones_nomina = array(
                    'id_empleado' => $id_empleado, 
                    'id_percepcion' => $data_percepciones[$i]["id"],
                    'importe' => $data_percepciones[$i]["importe"],
                    'id_nomina' => $id_nomina
                    );
      $this->db->insert('empleadosxpercepciones', $percepciones_nomina);
    }
    
    return true;
  }

  public function guardar_deducciones_nomina($id_nomina,$id_empleado,$data_deducciones){
    for ($i=0; $i < (count($data_deducciones) - 1); $i++) { 
      $deducciones_nomina = array(
                    'id_empleado' => $id_empleado, 
                    'id_deduccion' => $data_deducciones[$i]["id"],
                    'importe' => $data_deducciones[$i]["importe"],
                    'id_nomina' => $id_nomina
                    );
      $this->db->insert('empleadosxdeducciones', $deducciones_nomina);
    }
    
    return true;
  }

  public function guardar_aportaciones_nomina($id_nomina,$id_empleado,$data_aportaciones){
    for ($i=0; $i < (count($data_aportaciones) - 1); $i++) { 
      $aportaciones_nomina = array(
                    'id_empleado' => $id_empleado, 
                    'id_aportacion' => $data_aportaciones[$i]["id"],
                    'importe' => $data_aportaciones[$i]["importe"],
                    'id_nomina' => $id_nomina
                    );
      $this->db->insert('empleadosxaportaciones', $aportaciones_nomina);
    }
    
    return true;
  }
    //***************************************************************************
  //DATOS DEL EMPLEADO POR NOMINA PARA EL ENCABEZADO DEL PDF
  //***************************************************************************
  public function datos_empleado_nomina($id_empleado, $id_nomina){

    $query = $this->db->query("SELECT cat_empleados.id_empleado,  cat_empleados.nombre as 'empleado', cat_empleados.ap_paterno, cat_empleados.ap_materno, cat_empleados.curp, cat_empleados.no_plaza,  cat_empleados.rfc, cat_empleados.horas, cat_puestos.nivel, cat_puestos.nombre as 'puesto',
                      cat_depto.nombre as 'depto', cat_empleados.no_empleado, tab_nomina.periodo_inicio, tab_nomina.periodo_fin, tab_nomina.periodo_quinquenal
                   FROM cat_percepciones, empleadosxpercepciones, tab_nomina,  cat_empleados, cat_puestos, cat_depto
                   WHERE cat_empleados.id_empleado = empleadosxpercepciones.id_empleado 
                      AND cat_depto.id_depto = cat_empleados.id_depto
                      AND cat_empleados.id_puesto = cat_puestos.id_puesto
                    AND empleadosxpercepciones.id_percepcion = cat_percepciones.id_percepcion 
                    AND empleadosxpercepciones.id_nomina = tab_nomina.id_nomina 
                        AND cat_empleados.id_empleado =  ".$id_empleado."
                        AND tab_nomina.id_nomina = ".$id_nomina." group by cat_empleados.id_empleado");

      if ($query->num_rows() > 0) {
          return $query->result();
      }else{
          return false;
      }

  }
  //***************************************************************************
  //PERCEPCIONES POR NOMINA PARA EL PDF
  //***************************************************************************
  public function percepciones_nomina($id_empleado, $id_nomina){

    $query = $this->db->query("SELECT cat_percepciones.indicador, cat_percepciones.nombre, empleadosxpercepciones.importe, 
                      cat_empleados.nombre as empleado, cat_empleados.curp, cat_empleados.no_plaza,  cat_empleados.rfc , cat_puestos.nombre as 'puesto',
                      cat_depto.nombre as 'depto', cat_empleados.no_empleado, tab_nomina.periodo_inicio, tab_nomina.periodo_fin, tab_nomina.periodo_quinquenal
                   FROM cat_percepciones, empleadosxpercepciones, tab_nomina,  cat_empleados, cat_puestos, cat_depto
                   WHERE cat_empleados.id_empleado = empleadosxpercepciones.id_empleado 
                      AND cat_depto.id_depto = cat_empleados.id_depto
                      AND cat_empleados.id_puesto = cat_puestos.id_puesto
                    AND empleadosxpercepciones.id_percepcion = cat_percepciones.id_percepcion 
                    AND empleadosxpercepciones.id_nomina = tab_nomina.id_nomina 
                        AND cat_empleados.id_empleado =  '".$id_empleado."'
                        AND tab_nomina.id_nomina = '".$id_nomina."' ");

      if ($query->num_rows() > 0) {
          return $query->result();
      }else{
          return false;
      }

  }
  //***************************************************************************
  //DEDUCCIONES POR NÓMINA PARA EL PDF
  //***************************************************************************
  public function deducciones_nomina($id_empleado, $id_nomina){

    $query = $this->db->query("SELECT cat_deducciones.indicador, cat_deducciones.nombre,empleadosxdeducciones.importe, 
                      cat_empleados.nombre as empleado, cat_empleados.ap_paterno, cat_empleados.ap_materno, cat_empleados.curp, cat_empleados.no_plaza,  cat_empleados.rfc , cat_puestos.nombre as 'puesto',
                      cat_depto.nombre as 'depto', cat_empleados.no_empleado, tab_nomina.periodo_inicio, tab_nomina.periodo_fin, tab_nomina.periodo_quinquenal
                   FROM cat_deducciones, empleadosxdeducciones, tab_nomina,  cat_empleados, cat_puestos, cat_depto
                   WHERE cat_empleados.id_empleado = empleadosxdeducciones.id_empleado 
                      AND cat_depto.id_depto = cat_empleados.id_depto
                      AND cat_empleados.id_puesto = cat_puestos.id_puesto
                    AND empleadosxdeducciones.id_deduccion = cat_deducciones.id_deduccion 
                    AND empleadosxdeducciones.id_nomina = tab_nomina.id_nomina 
                        AND cat_empleados.id_empleado =  '".$id_empleado."'
                        AND tab_nomina.id_nomina = '".$id_nomina."' ");

      if ($query->num_rows() > 0) {
          return $query->result();
      }else{
          return false;
      }

  }

  //***************************************************************************
  //APORTACIONES POR NÓMINA PARA EL PDF
  //***************************************************************************
  public function aportaciones_nomina($id_empleado, $id_nomina){

    $query = $this->db->query("SELECT cat_aportaciones.indicador, cat_aportaciones.nombre,empleadosxaportaciones.importe, 
                      cat_empleados.nombre as empleado, cat_empleados.ap_paterno, cat_empleados.ap_materno, cat_empleados.curp, cat_empleados.no_plaza,  cat_empleados.rfc , cat_puestos.nombre as 'puesto',
                      cat_depto.nombre as 'depto', cat_empleados.no_empleado, tab_nomina.periodo_inicio, tab_nomina.periodo_fin, tab_nomina.periodo_quinquenal
                   FROM cat_aportaciones, empleadosxaportaciones, tab_nomina,  cat_empleados, cat_puestos, cat_depto
                   WHERE cat_empleados.id_empleado = empleadosxaportaciones.id_empleado 
                      AND cat_depto.id_depto = cat_empleados.id_depto
                      AND cat_empleados.id_puesto = cat_puestos.id_puesto
                    AND empleadosxaportaciones.id_aportacion = cat_aportaciones.id_aportacion 
                    AND empleadosxaportaciones.id_nomina = tab_nomina.id_nomina 
                        AND cat_empleados.id_empleado =  '".$id_empleado."'
                        AND tab_nomina.id_nomina = '".$id_nomina."' ");

      if ($query->num_rows() > 0) {
          return $query->result();
      }else{
          return false;
      }

  }

}