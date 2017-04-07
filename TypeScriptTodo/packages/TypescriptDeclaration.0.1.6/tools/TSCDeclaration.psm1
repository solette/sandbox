param($installPath, $toolsPath, $package, $project)

function Get-TSD
{
    param(        
        [string]$tsFile        
    )
    
    if ([string]::IsNullOrEmpty($tsFile)) {
        Write-Host "Typescript file name should not be null or empty string" -foreground "Red";
        exit;
    }
    
    $length = $tsFile.length;   
    if($length -gt 3)
    {
        $ext = $tsFile.substring($length-3,3).ToLower();
        if($ext -ne ".ts"){
            $tsFile = $tsFile + ".ts";
        }        
    }
    
    $project = (Get-Project);       
    $projectPath = [System.IO.PATH]::GETDIRECTORYNAME($project.FullName);
        
    $tsFilePath =  $projectPath + "\Scripts\" + $tsFile;
    if(!(Test-Path -path $tsFilePath)){
        $tsFilePath =  $projectPath + "\" + $tsFile;        
        if(!(Test-Path -path $tsFilePath)){            
            Write-Host "'$tsFile' does not exist in the project selected." -foreground "Red";
            exit;
        }      
    }  
                           
    #$tscPath = 'c:\Program Files\Microsoft SDKs\TypeScript\0.8.1.0\tsc.exe'
    #$tscPath = 'c:\Program Files (x86)\Microsoft SDKs\TypeScript\0.8.1.0\tsc.exe'	
	#$tscPath = 'c:\Program Files\Microsoft SDKs\TypeScript\0.9\tsc.exe'
	#$tscPath = 'c:\Program Files (x86)\Microsoft SDKs\TypeScript\0.9\tsc.exe'
	
    $tscPath = 'c:\Program Files\Microsoft SDKs\TypeScript\'
    if(!(Test-Path -path $tscPath)){
		$tscPath = 'c:\Program Files (x86)\Microsoft SDKs\TypeScript\'
		if(!(Test-Path -path $tscPath)){
			Write-Host "ERR001: Typescript not detected on this machine." -foreground "Red";
			exit;
		}
    }
    
    $tscFullPath = '';
    $folders = Get-ChildItem  $tscPath
    $folders | Foreach{
	     #Write-Host "Folder Name: " + $_.Name; 	 
		 #Write-Host "Splitted Name Length: " + $splitted.length
                 
         $splitted = $_.Name.split("."); 	
         if($splitted.length -eq 4 -or $splitted.length -eq 2){
            $explength = ($splitted.length * 2) - 1;
            
            if($_.Name.length -eq $explength){
                $tscFullPath = $_.Name;
            }
         }
    }
    
    $tscFullPath = $tscPath + '\' +  $tscFullPath + '\tsc.exe';
    if(!(Test-Path -path $tscFullPath)){
        Write-Host "ERR002: Typescript not detected on this machine." -foreground "Red";
        exit;
    }
    
    # & 'c:\Program Files\Microsoft SDKs\TypeScript\0.8.1.0\tsc.exe' 'C:\sample projects\MvcApplication1\scripts\sample.ts' '--declaration' 
    
    &  $tscFullPath  $tsFilePath '--declaration'    
    
    $filepath = $tsFilePath.Remove($tsFilePath.length-3, 3) + ".d.ts";    
    $projectItem = $project.ProjectItems.AddFromFile($filepath);
	$projectItem.Open().Document.Activate();    
    
    Write-Host "Declaration file successfully generated.";    
}