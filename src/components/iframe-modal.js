"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function IframeModal({ isOpen, onClose, title, iframeUrl, description }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] max-h-[800px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
          {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
        </DialogHeader>

        <div className="flex-1 px-6 pb-6">
          <div className="w-full h-full min-h-[500px] rounded-lg overflow-hidden border">
            <iframe
              src={iframeUrl} 
              title={title}
              className="w-full h-full border-none"
              allow="camera;microphone"
              loading="lazy"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
