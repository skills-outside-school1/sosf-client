import React from 'react';
import emailjs from "@emailjs/browser";
import { showErrorNotification, showSuccessNotification } from '@/components/Notification/Notification';

export default function DownloadBrochure() {
    //create a function to handle file download 
    const handleDownload = () => {
        // replace 'brochure.pdf' with your actual file path
        const file = new File([''], 'brochure.pdf', { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = fileURL;
        a.download = 'brochure.pdf';
        a.click();
    }

    // create logic to handle form  inputs and submission using email js for name and email here 
    
  return (


    <div>


    </div>
  )
}
