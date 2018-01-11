<div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-content">

                        <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover dataTables-example" id="tabla_lista_empleados">
                    <thead>
                    <tr>
                        <th>NO. PLAZA</th>
                        <th>NOMBRE</th>
                        <th>AP. PATERNO</th>
                        <th>AP. MATERNO</th>
                        <th>FECHA DE INGRESO</th>
                        <th>DEPARTAMENTO</th>
                        <th>PUESTO</th>
                        <th>RFC</th>
                    </tr>
                    </thead>
                    <tbody>

                    <?php 
                        foreach ($empleados as $empleado) {
                     ?>
                        <tr class="gradeX">
                            <td> <?php echo $empleado->no_plaza; ?> </td>
                            <td> <?php echo $empleado->nombre_emp; ?> </td>
                            <td> <?php echo $empleado->ap_paterno; ?> </td>
                            <td> <?php echo $empleado->ap_materno; ?> </td>
                            <td> <?php echo $empleado->fecha_ingreso; ?> </td>
                            <td> <?php echo $empleado->nombre_depto; ?> </td>
                            <td> <?php echo $empleado->nombre_puesto; ?> </td>
                            <td> <?php echo $empleado->rfc; ?> </td>
                        </tr>
                     <?php     
                        }
                    ?>
                    
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>NO. PLAZA</th>
                        <th>NOMBRE</th>
                        <th>AP. PATERNO</th>
                        <th>AP. MATERNO</th>
                        <th>FECHA DE INGRESO</th>
                        <th>DEPARTAMENTO</th>
                        <th>PUESTO</th>
                        <th>RFC</th>
                    </tr>
                    </tfoot>
                    </table>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>