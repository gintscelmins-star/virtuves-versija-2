import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Trash2, Upload, GripVertical, Plus, Eye, EyeOff } from 'lucide-react';

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [newLabel, setNewLabel] = useState('');

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await base44.entities.GalleryImage.list('sort_order', 20);
    setImages(data);
  }

  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    const nextOrder = images.length > 0 ? Math.max(...images.map(i => i.sort_order)) + 1 : 1;
    await base44.entities.GalleryImage.create({
      url: file_url,
      label: newLabel || `Projekts ${nextOrder}`,
      sort_order: nextOrder,
      active: true,
    });
    setNewLabel('');
    setUploading(false);
    e.target.value = '';
    await load();
  }

  async function handleDelete(id) {
    if (!confirm('Dzēst attēlu?')) return;
    await base44.entities.GalleryImage.delete(id);
    await load();
  }

  async function handleToggle(img) {
    await base44.entities.GalleryImage.update(img.id, { active: !img.active });
    await load();
  }

  async function handleLabelChange(img, label) {
    await base44.entities.GalleryImage.update(img.id, { label });
    await load();
  }

  async function handleOrderChange(img, sort_order) {
    await base44.entities.GalleryImage.update(img.id, { sort_order: Number(sort_order) });
    await load();
  }

  return (
    <div className="min-h-screen" style={{ background: '#f5f0e6', fontFamily: 'var(--font-jost, sans-serif)' }}>
      <div className="max-w-5xl mx-auto px-5 py-10">
        {/* Header */}
        <div className="mb-8">
          <a href="/" className="text-sm opacity-50 hover:opacity-100 transition-opacity mb-4 inline-block" style={{ color: '#8a7055' }}>
            ← Uz mājas lapu
          </a>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 32, color: '#1a1714', fontWeight: 400 }}>
            Galerijas pārvaldība
          </h1>
          <p className="mt-2 text-sm" style={{ color: '#5c5248' }}>
            Augšupielādē un pārvaldi galerijas attēlus. Vietnē tiek rādīti pirmie 6 aktīvie attēli pēc kārtas numura.
          </p>
        </div>

        {/* Upload new */}
        <div className="p-6 mb-8 border" style={{ background: '#fdfaf6', borderColor: 'rgba(138,112,85,0.2)' }}>
          <h2 className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: '#c9a96e' }}>
            Pievienot jaunu attēlu
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-end">
            <div className="flex-1">
              <label className="block text-xs mb-1 uppercase tracking-wider" style={{ color: '#8a7055' }}>
                Apraksts (piem. "Rīga · Minimālistiskā")
              </label>
              <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                placeholder="Projekta apraksts..."
                className="w-full px-3 py-2 text-sm border outline-none"
                style={{ borderColor: 'rgba(138,112,85,0.3)', background: 'white', color: '#1a1714' }}
              />
            </div>
            <label className={`flex items-center gap-2 px-6 py-2 cursor-pointer text-sm font-medium uppercase tracking-wider transition-opacity ${uploading ? 'opacity-50 pointer-events-none' : 'hover:opacity-80'}`}
              style={{ background: '#1a1714', color: '#f5f0e6', whiteSpace: 'nowrap' }}>
              <Upload size={14} />
              {uploading ? 'Augšupielādē...' : 'Augšupielādēt attēlu'}
              <input type="file" accept="image/*" onChange={handleFileUpload} className="sr-only" />
            </label>
          </div>
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.id} className="border overflow-hidden" style={{ background: '#fdfaf6', borderColor: 'rgba(138,112,85,0.2)', opacity: img.active ? 1 : 0.5 }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 flex gap-1">
                  <button
                    onClick={() => handleToggle(img)}
                    className="p-1.5 rounded"
                    style={{ background: 'rgba(0,0,0,0.6)', color: 'white' }}
                    title={img.active ? 'Paslēpt' : 'Rādīt'}
                  >
                    {img.active ? <Eye size={13} /> : <EyeOff size={13} />}
                  </button>
                  <button
                    onClick={() => handleDelete(img.id)}
                    className="p-1.5 rounded"
                    style={{ background: 'rgba(200,0,0,0.7)', color: 'white' }}
                    title="Dzēst"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
                {!img.active && (
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
                    <span className="text-white text-xs uppercase tracking-widest">Paslēpts</span>
                  </div>
                )}
              </div>
              <div className="p-3 flex gap-2 items-center">
                <div className="flex flex-col gap-1 flex-1">
                  <input
                    type="text"
                    defaultValue={img.label}
                    onBlur={(e) => handleLabelChange(img, e.target.value)}
                    placeholder="Apraksts..."
                    className="w-full text-xs px-2 py-1 border outline-none"
                    style={{ borderColor: 'rgba(138,112,85,0.25)', color: '#1a1714' }}
                  />
                  <div className="flex items-center gap-1">
                    <span className="text-xs" style={{ color: '#8a7055' }}>Kārta:</span>
                    <input
                      type="number"
                      defaultValue={img.sort_order}
                      onBlur={(e) => handleOrderChange(img, e.target.value)}
                      className="w-14 text-xs px-2 py-1 border outline-none"
                      style={{ borderColor: 'rgba(138,112,85,0.25)', color: '#1a1714' }}
                      min={1} max={99}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {images.length === 0 && (
            <div className="col-span-3 py-16 text-center" style={{ color: '#8a7055' }}>
              <Upload size={32} className="mx-auto mb-3 opacity-40" />
              <p className="text-sm">Nav pievienotu attēlu. Augšupielādē pirmo!</p>
            </div>
          )}
        </div>

        {images.length > 0 && (
          <p className="mt-6 text-xs text-center" style={{ color: '#8a7055', opacity: 0.7 }}>
            Vietnē tiek rādīti pirmie 6 aktīvie attēli, kārtoti pēc "Kārtas numura".
          </p>
        )}
      </div>
    </div>
  );
}