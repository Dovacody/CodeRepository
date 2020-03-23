#
# CMSC257 - Utility Library 
# Code for the CMSC257 Projects
#

# Make environment
INCLUDES=-I.
CC=gcc
CFLAGS=-I. -c -g -Wall $(INCLUDES)
LINKARGS=-lm
LIBS=-lm

# Files
OBJECT_FILES=	p2.o \
				p2-support.o

# Productions
all : cmsc257-s20-p2

cmsc257-s20-p2 : $(OBJECT_FILES)
	$(CC) $(LINKARGS) $(OBJECT_FILES) -o $@ $(LIBS)

p2.o : cmsc257-s20-p2.c p2-support.h
	$(CC) $(CFLAGS) $< -o $@

p2-support.o : p2-support.c p2-support.h 
	$(CC) $(CFLAGS) $< -o $@

clean : 
	rm -v cmsc257-s20-p2 $(OBJECT_FILES)
