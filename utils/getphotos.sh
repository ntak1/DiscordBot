#!/bin/bash

# This script downloads the Stardew Valley icons from its wiki page and
# saves the result in data folder
wget -r -l 1 -nd -A png https://stardewvalleywiki.com/List_of_All_Gifts

mkdir ../data
mv *.png ../data