import os
import math
from PIL import Image

IMG_DIR="./public/assets"

if __name__=="__main__":
    files = [f for f in os.listdir(IMG_DIR) if os.path.isfile(f)]
    min_size = (math.inf, math.inf)
    for f in files:
        if ('.jpg' in f and 'Gallery' in f):
            im = Image.open(f)
            im_size = im.size
            min_size = (min(im_size[0], min_size[0]),
                        min(im_size[1], min_size[1]))

    for f in files:
        if ('.jpg' in f and 'Gallery' in f):
            old_im = Image.open(f)
            old_size = old_im.size

            # Ucnomment to add frame
            """
            new_size = (800, 800)
            new_im = Image.new("RGB", new_size, color=(255, 255, 255))
            box = tuple((n - o) // 2 for n, o in zip(new_size, old_size))
            new_im.paste(old_im, box)
            """
            # Just resize
            new_im = old_im.resize(min_size)

            #new_im.show()
            new_im.save(f)

