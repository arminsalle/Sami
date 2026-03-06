import AdmZip from 'adm-zip';

try {
  const zip = new AdmZip();
  // Add all contents of the dist folder to the root of the zip
  zip.addLocalFolder('./dist');
  zip.writeZip('./public/spletna-stran.zip');
  console.log('Zip file created successfully at public/spletna-stran.zip');
} catch (error) {
  console.error('Error creating zip:', error);
}
