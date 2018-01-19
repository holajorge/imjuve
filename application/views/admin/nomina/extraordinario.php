 <div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-4">
            <h2>Nómina Extraordinaria</h2>
            <select class="form-control input-lg" id="periodo" name="periodo" onchange="serach_nominaExtraordinaria(value);">
                <option value="" selected disabled hidden >Seleccione nomina Extraordinaria</option>
                <?php foreach ($extraordinarios as $extraordinario): ?>
                    <option  value="<?php echo $extraordinario->id_concepto_extraordinario ?>"> <?php echo $extraordinario->nombre ?></option>
                <?php endforeach ?>
            </select>
        </div>
    </div><br>
    <!-- Table result seach periodos -->
    <div class="ibox float-e-margins" id="resultadoNominaExtra">
        
    </div>
  
</div>
